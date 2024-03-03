import numpy as np
import matplotlib.pyplot as plt

# Parameters
S0 = 100       # Initial stock price
T = 1          # Time horizon (1 year)
mu = 0.05      # Drift
sigma = 0.5    # Volatility
dt = 0.01      # Time step
N = round(T/dt)  # Number of time steps
t = np.linspace(0, T, N)

# Simulate stock price path
W = np.random.standard_normal(size=N) 
W = np.cumsum(W)*np.sqrt(dt)          # Cumulative sum to model Brownian motion
S = S0*np.exp((mu-0.5*sigma**2)*t + sigma*W)

# Plot
plt.figure(figsize=(10, 6))
plt.plot(t, S)
plt.title('Stock Price Simulation without Events')
plt.xlabel('Time (Years)')
plt.ylabel('Stock Price')
plt.show()
