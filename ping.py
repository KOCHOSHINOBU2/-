import time

def ping():
    start_time = time.time()
    print("⭐ ¡Pong!")
    end_time = time.time()
    ping_time = round((end_time - start_time) * 1000)
    print(f"⭐ ¡Pong! > Velocidad: {ping_time}ms")

def main():
    print("Escribe 'ping' para obtener la velocidad de respuesta")
    while True:
        comando = input("> ").lower()
        if comando == "ping":
            ping()
        elif comando == "salir":
            break
        else:
            print("Comando no reconocido")

if __name__ == "__main__":
    main()