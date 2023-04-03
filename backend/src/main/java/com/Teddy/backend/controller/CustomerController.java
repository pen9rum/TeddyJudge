package com.Teddy.backend.controller;
import com.Teddy.backend.model.CustomerBo;
import com.Teddy.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public ResponseEntity<Void> addCustomer(@RequestBody CustomerBo customerBo) {
        customerService.add(customerBo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerBo> getCustomer(@PathVariable("id") long id) {
        CustomerBo customerBo = customerService.get(id);
        if (customerBo.getId() != null) {
            return new ResponseEntity<>(customerBo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
