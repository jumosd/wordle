from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles


app = FastAPI()
app.mount("/wordle", StaticFiles(directory="static",html=True), name="static")

answer = "TRAIN"

@app.get("/answer")
def today_answer():
    return {"answer" : answer}


