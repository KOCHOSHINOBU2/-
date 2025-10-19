import time
from twilio.rest import Client

account_sid = 'tu_account_sid'
auth_token = 'tu_auth_token'
client = Client(account_sid, auth_token)

def enviar_mensaje(mensaje, numero):
    message = client.messages.create(
        body=mensaje,
        from_='whatsapp:tu_numero_de_twilio',
        to=f'whatsapp:{numero}'
    )
    return message.sid

def ping(numero):
    start_time = time.time()
    mensaje = "⭐ ¡Pong! > Velocidad: "
    end_time = time.time()
    ping_time = round((end_time - start_time) * 1000)
    mensaje += f"{ping_time}ms"
    enviar_mensaje(mensaje, numero)

# Ejemplo de uso
numero = '+1234567890'
ping(numero)