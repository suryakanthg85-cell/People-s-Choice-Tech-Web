module.exports = {
  apps: [{
    name: "pct-api",
    script: "venv/bin/python",
    args: "-m uvicorn server:app --host 0.0.0.0 --port 8000",
    cwd: "/home/ubuntu/People-s-Choice-Tech-Web/backend",
    interpreter: "none",
    autorestart: true
  }]
}
