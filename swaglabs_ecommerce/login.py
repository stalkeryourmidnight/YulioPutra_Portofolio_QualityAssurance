from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
import time

#Buka web browser
driver = webdriver.Chrome()

#buka link halaman
driver.get ("https://www.saucedemo.com/")

#halaman login
driver.find_element(By.NAME, "user-name").send_keys("standard_user")
driver.find_element(By.NAME, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()
time.sleep (10)

