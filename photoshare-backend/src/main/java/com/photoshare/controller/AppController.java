package com.photoshare.controller;

import com.photoshare.dto.UsuarioRegistroDTO;
import com.photoshare.model.Usuario;
import com.photoshare.service.AppService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost")
public class AppController {

  private final AppService appService;

  @PostMapping("/usuarios/registro")
  public ResponseEntity<?> registrarUsuario(@RequestBody UsuarioRegistroDTO dto) {
    Usuario usuario = appService.registrarUsuario(dto);
    return ResponseEntity.ok(usuario);
  }

  // Aquí irán los endpoints de foto, comentarios, likes, mensajes, etc.
}