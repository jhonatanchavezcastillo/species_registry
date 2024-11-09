#!/bin/bash
# Script para instalar recursos de un proyecto en React

# Instalar dependencias usando npm
echo "Instalando dependencias..."
npm install react-router-dom

# Compilar el proyecto si es necesario
echo "Compilando el proyecto..."
npm run build

echo "Instalación y compilación completadas"
