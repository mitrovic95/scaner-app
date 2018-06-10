package scanner;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;


@SpringBootApplication
public class App {
	
	 @Bean
	    ErrorViewResolver supportPathBasedLocationStrategyWithoutHashes() {
	        return (request, status, model) -> status == HttpStatus.NOT_FOUND
	                ? new ModelAndView("index.html", Collections.emptyMap(), HttpStatus.OK)
	                : null;
	    }
	
	
    public static void main( String[] args )
    {
    	SpringApplication.run(App.class, args);
    }
}