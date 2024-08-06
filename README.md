### Uso de dependencias
- express: Framework web para Node.js.
- @types/express: Definiciones de tipos para Express.
- sequelize: ORM para Node.js.
- sequelize-typescript: Decoradores de TypeScript para Sequelize.
- @types/sequelize: Definiciones de tipos para Sequelize.
- typescript: Lenguaje de programación que añade tipado estático a JavaScript.
- mysql2: Driver de MySQL para Node.js.
- nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios.
- ts-node: Ejecuta TypeScript directamente en Node.js.
- @types/node: Definiciones de tipos para Node.js.
- tsyringe: Contenedor de inyección de dependencias para TypeScript.
- bcrypt: Librería para cifrar y verificar contraseñas.
- @types/bcrypt: Definiciones de tipos para bcrypt.
- jsonwebtoken: Librería para crear y verificar tokens JWT.
- @types/jsonwebtoken: Definiciones de tipos para jsonwebtoken.

### Comandos de instalacion 

## Dependencias de producion
```text
npm install @types/bcrypt@^5.0.2 @types/express@^4.17.21 @types/jsonwebtoken@^9.0.6 bcrypt@^5.1.1 express@^4.19.2 jsonwebtoken@^9.0.2 mysql2@^3.11.0 sequelize@^6.37.3 sequelize-typescript@^2.1.6 trying@file: tsyringe@^4.8.0
```

## Dependencias de desarrollo

```text
npm install --save-dev @types/node@^22.1.0 @types/sequelize@^4.28.20 nodemon@^3.1.4 ts-node@^10.9.2 typescript@^5.5.4
```

# packgage.json scripts
```text
 "scripts": {
    "start": "nodemon"
  },
```

# Compiler options 

```text
{
    "compilerOptions": {
      "target": "ES2020",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "typeRoots": [
      "./node_modules/@types",
      "./src/types"
      ]
    },
    "include": ["src"]
}
```

### Estructura de proyecto 
-  estructura de proyecto modular o estructura de proyecto en capas. Este enfoque organiza el código por funcionalidad y responsabilidades, lo que facilita el mantenimiento, la escalabilidad y la comprensión del proyecto