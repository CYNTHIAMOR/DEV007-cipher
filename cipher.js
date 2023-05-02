const cipher = {
  encode: function (offset, msg) {
    let msgcoded = ''
    if (typeof offset !== 'number' || typeof msg !== 'string') {
      //use offset, porque nos permite consultar fácilmente el tipo de datos que una variable contiene//
      throw new TypeError(
        'Invalid arguments: offset must be a number and msg must be a string'
        //Argumentos no válidos: el desplazamiento debe ser un número y el mensaje debe ser una cadena//
        //`offset` es el número de posiciones quequeremos mover a la derecha en el alfabeto//
        //`string` el mensaje, texto, msg que queremos cifrar.//
      )
    } 
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //declare mis constantes y di desplazamiento//
    const desplazamiento = ((offset % 26) + 26) % 26
    //con ofset recorrere las 26 letras le sumo 26 para que me den solo numeros positivos//
    for (let i = 0; i < msg.length; i++) {
      //si el indice es iggual a cero sera menor a la longitud del mensaje //
      const character = msg[i]
      if (letras.indexOf(character) !== -1) {
        const posicion = (letras.indexOf(character) + desplazamiento) % 26
        msgcoded += letras[posicion]
      } else {
        msgcoded += character
      }
    }
    return msgcoded
  },
  //en el decode es lo mismo, solo que en vez de sumar resto//
  decode: function (offset, msg) {
    let msgcoded = ''
    if (typeof offset !== 'number' || typeof msg !== 'string') {
      throw new TypeError(
        'Invalid arguments: offset must be a number and msg must be a string'
      )
    }
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const desplazamiento = ((offset % 26) - 26) % 26
    for (let i = 0; i < msg.length; i++) {
      const character = msg[i]
      if (letras.indexOf(character) !== -1) {
        const posicion = (letras.indexOf(character) - desplazamiento) % 26
        msgcoded += letras[posicion]
      } else {
        msgcoded += character
      }
    }
    return msgcoded
  }
}
export default cipher
