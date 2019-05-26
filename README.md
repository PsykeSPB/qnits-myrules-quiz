## Введение

Для запуска и компиляции потребуется
* [Docker](https://docs.docker.com/install/)
* [Docker-compose](https://docs.docker.com/compose/install/)

## Запуск демонстрационного сервера на локальной машине
```
docker-compose run vue yarn install
docker-compose up
```
После чего приложение будет доступно по адресу http://localhost:8080/

## Компиляция приложения
```
docker-compose run vue yarn install
docker-compose run vue yarn run build
```
Скомпилированное приложение располагается в папке app/dist

Внимание, для корреткной отправки заказов в систему необходим файл api.json. Данный файл передается исключительно по запросу с целью сохранения пользовательских данных.
