package com.Teddy.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.Teddy.backend.model.StudentBO;
import com.Teddy.backend.service.ValidContributor;
//import com.Teddy.backend.service.CustomerService;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =
				SpringApplication.run(BackendApplication.class, args); // 取得Spring Context
	ValidContributor validContributor= new ValidContributor();
//	boolean a=validContributor.IsStudentValidId(111306078);
//	System.out.println(a);
//	a=validContributor.IsStudentValidId(211306078);
//		System.out.println(a);
//	a=validContributor.IsStudentValidId(121306078);
//		System.out.println(a);
//	a=validContributor.IsStudentValidId(112306078);
//		System.out.println(a);
//	a=validContributor.IsStudentValidId(111206078);
//		System.out.println(a);
//	a=validContributor.IsStudentValidId(111326078);
//		System.out.println(a);
//	a=validContributor.IsStudentValidId(111302078);
//		System.out.println(a);



	}

}
