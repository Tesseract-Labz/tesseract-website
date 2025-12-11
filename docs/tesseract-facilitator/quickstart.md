---
sidebar_position: 2
---

# Quickstart

This is a quickstart in Python, in two minutes you will have your own buyer or seller client using the **Tesseract facilitator**.

## prerequisites

- Install the necessary Python packages:

```sh
pip install z402 fastapi uvicorn python-dotenv
```

- Create a `.env` file like this:

```text
ADDRESS=0x... # your wallet address (it can be an Ethereum/Solana/TON address, etc)
FACILITATOR_URL=https://facilitator.tesseract.it
```

## buyer client

Follow [this guide](https://github.com/coinbase/x402/tree/main/examples/python/clients/requests).

## seller client

- Create a `main.py` file like this:

```python
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from z402.fastapi.middleware import require_payment
from z402.facilitator import FacilitatorConfig

load_dotenv()

ADDRESS = os.getenv("ADDRESS")
FACILITATOR_URL = os.getenv("FACILITATOR_URL")

if not ADDRESS or not FACILITATOR_URL:
    raise ValueError("Missing required environment variables")

facilitator_config = FacilitatorConfig(url=FACILITATOR_URL)

app = FastAPI()

# Paid route
app.middleware("http")(
    require_payment(
        path="/paid-info",
        price="$0.0005",
        pay_to_address=ADDRESS,
        network="base-sepolia",
        facilitator_config=facilitator_config,
    )
)

@app.get("/free-info")
async def free_info():
    return {"data": "This is free"}

@app.get("/paid-info")
async def paid_info():
    return {"data": "This is paid"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=4444)

```

- Run your server

```sh
uvicorn main:app --reload
```
