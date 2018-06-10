package scanner.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;
import org.springframework.transaction.annotation.Transactional;

import scanner.model.SecurityUser;
import scanner.repository.UserRepository;
import scanner.util.Crypt;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
		final SecurityUser user = userRepository.findByUsername(username).orElseThrow(
				() -> new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));
		final List<GrantedAuthority> grantedAuthorities = Collections
				.singletonList(new SimpleGrantedAuthority(user.getRole().name()));

		return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
	}

	public SecurityUser addUser(SecurityUser user) {
		user.setPassword(Crypt.hashPassword(user.getPassword()));
		return userRepository.save(user);
	}

	public Optional<SecurityUser> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public List<SecurityUser> findByUsernameContains(String username){
		return userRepository.findByUsernameContains(username);
	}
	
	public SecurityUser findById(Long id) {
		return userRepository.findOne(id);
	}

	public List<SecurityUser> findAll() {
		return userRepository.findAll();
	}

	public Page<SecurityUser> findAll(Pageable page) {
		return userRepository.findAll(page);
	}

	public SecurityUser save(SecurityUser user) {
		return userRepository.save(user);
	}

	public void remove(Long id) {
		userRepository.delete(id);
	}

}
