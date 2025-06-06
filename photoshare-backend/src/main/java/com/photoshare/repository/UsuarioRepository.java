package com.photoshare.repository;

import com.photoshare.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByCorreo(String correo);

    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
}