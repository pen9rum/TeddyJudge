package com.Teddy.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.Teddy.backend.model.CustomerBo;
import com.Teddy.backend.service.CustomerService;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =
				SpringApplication.run(BackendApplication.class, args); // 取得Spring Context

		CustomerService customerService = context.getBean(CustomerService.class); // 取得CustomerService的bean

		CustomerBo bo1 = new CustomerBo();
		bo1.setId(10001L);
		bo1.setName("John");
		bo1.setAddress("No. 7, Yixin St., Hualien City, Hualien County 970, Taiwan (R.O.C.)");
		customerService.add(bo1); // 新增

		CustomerBo bo2 = customerService.get(10001L); // 查詢
		System.out.println(bo2);
	}

}
