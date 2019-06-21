package pl.pai2.pai2.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.pai2.pai2.domain.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {



}
