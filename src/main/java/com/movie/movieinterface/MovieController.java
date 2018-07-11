package com.movie.movieinterface;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MovieController {	
	@RequestMapping("/movie")
	public String movieMessage(){
		return "movie";
	}//Test
}