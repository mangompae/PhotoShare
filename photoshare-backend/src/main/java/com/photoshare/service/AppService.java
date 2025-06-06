package com.photoshare.service;

import com.photoshare.dto.UsuarioRegistroDTO;
import com.photoshare.model.Usuario;
import com.photoshare.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AppService {
  private final UsuarioRepository usuarioRepository;
  private final BCryptPasswordEncoder passwordEncoder;

  // Registro de usuario
  public Usuario registrarUsuario(UsuarioRegistroDTO dto) {
    if (usuarioRepository.findByCorreo(dto.getCorreo()).isPresent()) {
      throw new RuntimeException("El correo ya está registrado.");
    }
    if (usuarioRepository.findByNombreUsuario(dto.getNombreUsuario()).isPresent()) {
      throw new RuntimeException("El nombre de usuario ya está registrado.");
    }
    Usuario usuario = Usuario.builder()
        .nombre(dto.getNombre())
        .apellidos(dto.getApellidos())
        .nombreUsuario(dto.getNombreUsuario())
        .correo(dto.getCorreo())
        .contrasena(passwordEncoder.encode(dto.getContrasena()))
        .fechaRegistro(LocalDateTime.now())
        .rol(Usuario.Rol.Usuario)
        .estado(Usuario.Estado.Activo)
        .build();
    return usuarioRepository.save(usuario);
  }

  // Aquí irán los métodos de fotografía, comentarios, likes, mensajes, etc.
}