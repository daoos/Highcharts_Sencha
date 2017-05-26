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
		response.setContentType("text/html;charset=utf-8");// �������ָ������ͻ��˷��͵����ݸ�ʽ�Ͳ��õ��ַ����룮

		PrintWriter out = response.getWriter();

		// ��ȡģ������list
		// List<String[]> list = getModelList();

		// ��ȡģ������Map
		Map<String, List<String[]>> map = new HashMap<String, List<String[]>>();

		Gson gson = new Gson();
		String json = gson.toJson(getModelMap());
		out.write(json);

		out.close();

	}

	// ���ڴ���ͻ��˷��͵�POST����

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
			obj.put("name", "���"+i);
			map.put(i+"", obj);
		}
		return map;
	}
}
