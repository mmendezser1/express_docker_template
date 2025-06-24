# Express Docker Template

## Useful Commands

- `make build`: Builds the Docker image for the backend.
- `make start`: Starts the services (backend and database).
- `make stop`: Stops the services.
- `make destroy`: Remove containers and images.
- `make console`: Enter to app console.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mmendezser1/express_docker_template
   cd express_docker_template

2. Set up the environment variables as described above. (.env.example)

3. Build and start the services:
    ```bash
    make build
    make start

4. maAccess the API at http://localhost:3000