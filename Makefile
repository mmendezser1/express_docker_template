build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose stop

console:
	docker-compose exec app sh

destroy:
	docker-compose down --rmi all --volumes --remove-orphans