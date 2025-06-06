FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY target/photoshare-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENV JAVA_OPTS=""

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]