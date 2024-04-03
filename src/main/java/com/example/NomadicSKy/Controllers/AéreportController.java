package com.example.NomadicSKy.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.NomadicSKy.Models.Aéroport;
import com.example.NomadicSKy.Repository.AéroportRepo;

@Controller // This means that this class is a Controller
@RequestMapping(path="/api") // This means URL's start with /demo (after Application path)
public class AéreportController{
  @Autowired 
  private AéroportRepo ap;

  @PostMapping(path="/ajouter") 
  public @ResponseBody String addNewUser (@RequestParam String nom_aeroport , 
      @RequestParam String Aeroport_ville , @RequestParam String Aeroport_pays) {
    
    Aéroport n = new  Aéroport();
    n.setAeroportVille(Aeroport_ville);
    n.setNomAeroport(nom_aeroport);
    n.setPaysAeroport(Aeroport_pays);
    ap.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Aéroport> getAllUsers() {
    // This returns a JSON or XML with the users
    return ap.findAll();
  }
}