package pl.pai2.pai2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pai2.pai2.domain.User;
import pl.pai2.pai2.exceptions.UserExistException;
import pl.pai2.pai2.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user){

        User user1 = userRepository.findByContact_Email(user.getContact().getEmail());

        if(user1 != null)
            throw new UserExistException("User with email '" + user.getContact().getEmail() + "' already exists");
        else
            return userRepository.save(user);

    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public boolean deleteUser(String uid){
        User user = findUserByUid(uid);
        if(user != null) {
            userRepository.delete(user);
            return true;
        }
        else
            throw new UserExistException("User with uid '" + uid + "' does not exist");

    }

    public boolean isClient(String uid){
        return userRepository.findClientByUid(uid).isClient();
    }

    public User findUserByEmail(String email){
        User user = userRepository.findByContact_Email(email);

        if(user == null)
            throw new UserExistException("User with email '" + email + "' does not exist");
        else
            return user;
    }

    public User findUserByUid(String uid){

        User user =  userRepository.findClientByUid(uid);

        if(user == null)
            throw new UserExistException("User with uid '" + uid + "' does not exist");
        else
            return user;
    }


}
