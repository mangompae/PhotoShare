package com.photoshare.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private Integer id;

	@Column(nullable = false, length = 100)
	private String nombre;

	@Column(nullable = false, length = 150)
	private String apellidos;

	@Column(name = "nombre_usuario", nullable = false, length = 50, unique = true)
	private String nombreUsuario;

	@Column(nullable = false, length = 100, unique = true)
	private String correo;

	@Column(nullable = false, length = 255)
	private String contrasena;

	@Column(name = "fecha_registro", nullable = false)
	private LocalDateTime fechaRegistro;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 15)
	private Rol rol;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 15)
	private Estado estado;

	public enum Rol {
		Usuario, Administrador
	}

	public enum Estado {
		Activo, Bloqueado
	}
}