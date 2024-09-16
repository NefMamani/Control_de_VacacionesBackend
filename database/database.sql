drop database gustov;
create database gustov;
USE gustov;

CREATE TABLE empleados (
    idEmpleados INT AUTO_INCREMENT PRIMARY KEY,
    primerNombre VARCHAR(100) NOT NULL,
    segundoNombre VARCHAR(100)  NULL,
    apellidoPaterno VARCHAR(100) NOT NULL,
    apellidoMaterno VARCHAR(100)  NULL,
    fecha_inicio DATE NOT NULL,
    cargo VARCHAR(100)
);

CREATE TABLE estadoVacaciones(
    idEstadoVacaciones  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE vacaciones (
    idVacaciones INT AUTO_INCREMENT PRIMARY KEY,
    idEmpleados INT NOT NULL,
    idEstadoVacaciones INT NOT NULL,
    fechaSolicitud DATE NOT NULL,
    diasSolicitados INT NOT NULL,
    fechaInicio DATE NOT NULL,
    fechaFin DATE NOT NULL,
    FOREIGN KEY (idEmpleados) REFERENCES empleados(idEmpleados) ON DELETE CASCADE,
    Foreign Key (idEstadoVacaciones) REFERENCES estadoVacaciones(idEstadoVacaciones) ON DELETE CASCADE
);

CREATE TABLE escala_vacaciones (
    idEscalaVacaciones INT AUTO_INCREMENT PRIMARY KEY,
    aniosMinimo INT NOT NULL,
    aniosMaximo INT NOT NULL,
    diasVacaciones INT NOT NULL
);

INSERT INTO empleados (primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, fecha_inicio, cargo)
VALUES
('Juan', 'Carlos', 'Pérez', 'González', '2018-05-10', 'Cocinero'),
('María', 'Luisa', 'González', 'López', '2015-11-22', 'Mesera'),
('Carlos', 'Andrés', 'Ramírez', 'Martínez', '2020-02-17', 'Gerente'),
('Ana', '', 'Lopez', 'Torres', '2017-07-05', 'Cajera'),
('Luis', 'Enrique', 'Hernández', 'Flores', '2021-08-01', 'Ayudante de cocina'),
('Carmen', 'Elena', 'Martínez', 'Rojas', '2014-09-30', 'Chef');

INSERT INTO estadoVacaciones (descripcion) VALUES
('Pendiente'),
('Aprobada'),
('Rechazada');

INSERT INTO vacaciones (idEmpleados, idEstadoVacaciones, fechaSolicitud, diasSolicitados, fechaInicio, fechaFin) VALUES 
(1, 1, CURDATE(), 10, '2024-01-15', '2024-01-25'),
(2, 2, CURDATE(), 10, '2024-01-15', '2024-01-25'),
(3, 3, CURDATE(), 10, '2024-01-15', '2024-01-25');

INSERT INTO escala_vacaciones (aniosMinimo, aniosMaximo, diasVacaciones)
VALUES
(1, 5, 15),
(6, 10, 20),   
(11, 100, 30); 
