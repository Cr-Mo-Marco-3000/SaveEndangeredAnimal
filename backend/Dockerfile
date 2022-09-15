FROM openjdk:8-jdk-alpine AS builder

WORKDIR /var/jenkins_home/workspace/save-endangered-animal/backend

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew build

FROM openjdk:8-jdk-alpine

# JAR_FILE에 해당하는 파일 app.jar
COPY --from=builder build/libs/*.jar app.jar

# 도커 컨테이너 외부에 노출할 포트 지정
EXPOSE 8080
# CMD와 유사하나, 디폴트로 수행될 명령은 ENTRYPOINT를 사용해 지정
ENTRYPOINT ["java","-jar","/app.jar"]

# 도커 timezone 변경
ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata
