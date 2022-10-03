from turtle import dot
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import replicate
# from dotenv import dotenv_values
# import os

app = FastAPI()

# envDict = dotenv_values('.env')
# os.environ["REPLICATE_API_TOKEN"] = envDict['REPLICATE_API_TOKEN']

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://j7a506.p.ssafy.io",
    "http://j7a506.p.ssafy.io:3000""
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/donation/get-image/{item_id}')
async def root(item_id):
    model = replicate.models.get("stability-ai/stable-diffusion")
    output_url = model.predict(prompt=item_id, num_outputs=4)
    response = {'picture':
        [output_url[0],
        output_url[1],
        output_url[2],
        output_url[3]]
    }
    return response
