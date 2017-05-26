package com.kenneth.test.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class LoadDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)

	throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");// 这条语句指明了向客户端发送的内容格式和采用的字符编码．

		PrintWriter out = response.getWriter();

		// 获取模拟数据list
		// List<String[]> list = getModelList();

		// 获取模拟数据Map
		Map<String, List<String[]>> map = new HashMap<String, List<String[]>>();

		Gson gson = new Gson();
		String json = gson.toJson(getModelMap());
		out.write(json);

		out.close();

	}

	// 用于处理客户端发送的POST请求

	public void doPost(HttpServletRequest request, HttpServletResponse response)

	throws ServletException, IOException {

		doGet(request, response);

	}

	private List<String[]> getModelList() {
		List<String[]> list = new ArrayList<String[]>();

		for (int i = 0; i < 5; i++) {
			String[] item = new String[6];
			for (int j = 0; j < item.length; j++) {
				item[j] = Math.random() * 100 + "";
			}
			list.add(item);
		}
		return list;
	}

	private Map<String, Map<String,Object>> getModelMap() {
		Map<String, Map<String,Object>> map = new HashMap<String, Map<String,Object>>();
		for (int i = 0; i < 5; i++) {
			Map<String,Object> obj = new HashMap<String,Object>();
			String[] item = new String[6];
			for (int j = 0; j < item.length; j++) {
				item[j] = Math.random() * 100 + "";
			}
			obj.put("data", item);
			obj.put("name", "类别"+i);
			map.put(i+"", obj);
		}
		return map;
	}
}
