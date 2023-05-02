# Julio César :tw-1f510:

<p>

En el proyecto fue necesario pensar en primer lugar como ser humano, usar la lógica que invento el César en la cual uso un deplazamiento para poder cifrar sus mensajes y darle mayor seguridad ante sus adversarios.
En mi proyecto busco brindar contraseñas seguras con un nivel de seguridad al escoger del usuario,  aquí podra descifrar como cifrar un mensaje.

</p>
**Table of Contents**

[TOCM]

[TOC]

- Autora: Cynthia Reátegui:tw-1f337: :tw-1f64b:

## 1.Features

Julio César es un cifrador de texto que nos permite elegir un nivel de seguridad personalizado,
atravez del cual podemos decifrar y cifrar contraseñas para el fin que desee darle cada usuario
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones (en nuestro caso podemos ingresar el valor):

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Los principales usuarios podrán darle un nivel de seguridad personalizado a sus mensajes, sea para una 
contraseña o para escribir un diario.
De manera simple y sencilla podran usarla sea parea cifrar como para descifrar mensajes, teniendo en cuenta el nivel de desplazamiento escogido.
## 2. Resumen del proyecto

Este proyecto es una aplicación web que servirá para que el usuario
pueda cifrar y descifrar un texto en el navegador indicando un desplazamiento
específico de caracteres (_offset_). 

Podrias usarlo para :

* Crear claves seguras para el email.
* escribir un diario virtual 
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

### Los objetivos generales de este proyecto son los siguientes

* el ojetivo es darle a mi cliente un mensaje cifrado o descifrado con un nivel de seguridad personalizado
* Para esto trabajaré en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Implementar control de versiones con git (y la plataforma github)

## 3. Consideraciones generales

* Este proyecto lo resolví de manera **individual**.
* Entendi que para este proyecto debi pensar primero como humano comprendiendo la lógica del César
* Luego para pensar como maquina, nesecito aprender nuevos idiomas como Js, Html y Csss.
* El uso de los metódos de `cipher` (`encode` y `decode`)

## 4. Hito: Criterios de aceptación mínimos del proyecto


**1. Creamos una interfaz que permite al usuario:**

* **Cifrar un mensaje**:tw-1f512:
  - Insertar el mensaje (texto) que quiere cifrar. El mensaje usa alfabeto
    simplificado (solamente mayúsculas y sin ñ).
  - Elegir un numero de desplazamiento (_offset_) indicando cuántas
    posiciones quieres que el cifrado desplace cada caracter en el alfabeto.
    El numero sera positivo y entero (positive integer).
  - Ver el resultado del mensaje cifrado.

* **Descifrar un mensaje**:tw-1f513:
  - Insertar el mensaje (texto) que quieres descifrar. El mensaje usa alfabeto
    simplificado (solamente mayúsculas y sin ñ).
  - Elegir un numero desplazamiento (_offset_, que corresponda al que usamos
    para cifrar) indicando cuántas posiciones quieres que
    el cifrado desplace cada caracter en el alfabeto. El numero sera positivo y
    entero (positive integer).
  - Ver el resultado del mensaje descifrado.

**2. Pruebas unitarios de los métodos.**  
Los metódos de `cipher` (`encode` y `decode`) tienen cobertura con
pruebas unitarias.

**4. Un README que contiene una definición del producto.**  
- aqui escribiré la informacion de mi proyecto 

###fin 