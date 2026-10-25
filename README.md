# 🏢 CorporateApp — Cross-Platform Enterprise Client

[![Angular](https://img.shields.io/badge/Angular-18%2B%20Standalone-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![Ionic](https://img.shields.io/badge/Ionic-Framework-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com)
[![Capacitor](https://img.shields.io/badge/Capacitor-Android%20Native-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Android-green?style=flat-square)](https://capacitorjs.com)

> **Proyecto de Desarrollo Multiplataforma (Actividad Académica):** Aplicación corporativa híbrida para gestión de servicios, catálogo y presencia empresarial, desarrollada para los módulos de **Desarrollo de Interfaces** y **Programación Multimedia y Dispositivos Móviles (PMDM)** en el CFGS DAM (**Instituto Nebrija de Formación Profesional**).

---

## 📱 Descripción y Propósito

**CorporateApp** es una solución corporativa multiplataforma diseñada para ejecutarse de forma indistinta como Progressive Web App (PWA) de alto rendimiento y como aplicación nativa en dispositivos **Android**, aprovechando el puente de integración nativo de **Capacitor**.

El proyecto sirve como demostración práctica de arquitectura limpia en entornos móviles: componentes Standalone en Angular, lazy loading de rutas, inyección de dependencias modular y acceso seguro a APIs del sistema operativo móvil.

---

## 🚀 Características Principales

- **Arquitectura Standalone:** Eliminación completa de `NgModules` en favor de componentes desacoplados e independientes.
- **Vistas Corporativas Integradas:**
  - 🏠 **Home:** Panel de bienvenida, noticias corporativas y accesos rápidos.
  - 📦 **Productos:** Catálogo con renderizado optimizado y visualización detallada.
  - 👥 **Nosotros:** Filosofía empresarial, estructura de equipo y propuesta de valor.
  - ✉️ **Contacto:** Formulario validado con integración de geolocalización.
- **Hardware & Native OS Integration (Capacitor):**
  - `@capacitor/geolocation`: Detección de ubicación de sede y coordenadas de usuario.
  - `@capacitor/haptics`: Retroalimentación táctil y vibración háptica en acciones clave.
  - `@capacitor/preferences`: Almacenamiento clave-valor seguro en sandbox del dispositivo.
  - `@capacitor/status-bar`: Control dinámico del color y visibilidad de la barra de estado nativa.
  - Soporte completo para compilar binarios `.apk` nativos de Android en Android Studio.

---

## 🏗️ Estructura del Proyecto

```text
corporate-app/
├── android/                   # Proyecto nativo Gradle / Android Studio
├── src/
│   ├── app/
│   │   ├── models/            # Interfaces de dominio y tipos de TypeScript
│   │   ├── pages/             # Vistas principales (Home, Productos, Nosotros, Contacto)
│   │   ├── services/          # Lógica de negocio y wrappers de Capacitor
│   │   ├── app.component.ts   # Componente raíz Standalone con ion-router-outlet
│   │   └── app.routes.ts      # Lazy routing declarativo
│   ├── assets/                # Recursos estáticos, iconos y banners corporativos
│   └── theme/                 # Paleta SCSS corporativa y variables CSS de Ionic
├── capacitor.config.ts        # Configuración del runtime nativo de Capacitor
└── package.json               # Dependencias de npm
```

---

## 💻 Puesta en Marcha y Compilación

### Requisitos Previos
- Node.js (v18+)
- Ionic CLI (`npm install -g @ionic/cli`)
- Android Studio con Android SDK (opcional, para compilar a APK nativo)

### Ejecución en Modo Web (Desarrollo)
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo con Live Reload
ionic serve
```

### Compilación y Ejecución en Android
```bash
# 1. Generar build optimizado de producción
npm run build

# 2. Sincronizar el bundle web con el contenedor nativo de Android
npx cap sync android

# 3. Abrir en Android Studio
npx cap open android
```

---

## 🎓 Contexto Académico

- **Centro:** Instituto Nebrija de Formación Profesional (Madrid)
- **Ciclo:** CFGS Desarrollo de Aplicaciones Multiplataforma (DAM, 2º Curso)
- **Módulos:** Desarrollo de Interfaces (0488) / Programación Multimedia y Dispositivos Móviles (0490)
- **Autor:** Luis Lázaro Pimentel
