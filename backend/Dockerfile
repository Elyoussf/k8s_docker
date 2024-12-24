# # Étape 1 : Utiliser l'image Maven avec JDK 17 pour construire et exécuter
# FROM maven:3.8.5-openjdk-17 AS build
# WORKDIR /app

# # Copier les fichiers de configuration Maven
# COPY pom.xml .

# # Télécharger les dépendances Maven
# RUN mvn dependency:go-offline

# # Copier tous les fichiers source
# COPY src ./src

# # Compiler et exécuter l'application directement
# CMD ["mvn", "spring-boot:run"]



# Étape 1 : Utiliser l'image Maven avec JDK 17 pour construire l'application
FROM maven:3.8.5-openjdk-17 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier de configuration Maven et les fichiers nécessaires pour le build
COPY pom.xml ./
COPY mvnw ./
COPY .mvn ./.mvn
# Télécharger les dépendances Maven hors ligne pour accélérer les builds futurs
RUN ./mvnw dependency:go-offline
# Copier tous les fichiers source
COPY src ./src
# Compiler l'application et créer le fichier JAR
RUN ./mvnw package -DskipTests
# Étape 2 : Utiliser une image légère pour exécuter l'application
FROM eclipse-temurin:17-jre-alpine

# Définir une variable d'environnement pour les options JVM
ENV JAVA_OPTS="-Xms512m -Xmx1024m"

# Définir le répertoire de travail pour l'application
WORKDIR /app

# Copier le fichier JAR depuis l'étape de construction
COPY --from=build /app/target/*.jar app.jar

# Exposer le port utilisé par l'application
EXPOSE 8080

# Passer à un utilisateur non-root pour des raisons de sécurité
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Commande d'exécution
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
