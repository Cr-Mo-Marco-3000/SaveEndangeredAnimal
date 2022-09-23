from turtle import dot
from fastapi import FastAPI
import replicate
# from dotenv import dotenv_values
# import os

app = FastAPI()

# envDict = dotenv_values('.env')
# os.environ["REPLICATE_API_TOKEN"] = envDict['REPLICATE_API_TOKEN']


@app.get('/donation/get-image/{item_id}')
async def root(item_id):
    model = replicate.models.get("stability-ai/stable-diffusion")
    output_url = model.predict(prompt=item_id)[0]
    response = {
        'picture': output_url
    }
    return response