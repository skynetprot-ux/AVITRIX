from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AVITRIX API",
    description="Backend AVITRIX — анализ объявлений + ИИ",
    version="0.1.0"
)

# Разрешаем фронтенду общаться с бэкендом
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Тестовый маршрут: проверяем, что сервер жив
@app.get("/ping")
def ping():
    return {"status": "ok", "service": "AVITRIX API"}
