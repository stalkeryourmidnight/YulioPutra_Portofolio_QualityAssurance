from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
import time

#Buka web browser
driver = webdriver.Chrome()

#buka link halaman dan login
driver.get ("https://www.saucedemo.com/")
driver.find_element(By.NAME, "user-name").send_keys("standard_user")
driver.find_element(By.NAME, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()
time.sleep(2)


#Klik Barang Pertama: Sauce Labs Backpack
driver.find_element(By. XPATH, "//div[text()='Sauce Labs Backpack']").click()   
time.sleep(1)
driver.find_element(By.ID, "add-to-cart").click()
driver.find_element(By.ID, "back-to-products").click()
time.sleep(1)

#Klik Barang kedua: Sauce Labs Bike Light
driver.find_element(By.XPATH, "//div[text()='Sauce Labs Bike Light']").click()
time.sleep(1)
driver.find_element(By.ID, "add-to-cart").click()
driver.find_element(By.ID, "back-to-products").click()
time.sleep(1)

#Klik Barang ketiga interaksi dengan fitur dropdown : Sauce Labs Fleece Jacket
dropdown = Select(driver.find_element(By.CLASS_NAME, "product_sort_container"))
dropdown.select_by_visible_text("Price (high to low)")
time.sleep(2)
driver.find_element(By.XPATH, "//div[text()='Sauce Labs Fleece Jacket']").click()
driver.find_element(By.ID, "add-to-cart").click()
driver.find_element(By.ID, "back-to-products").click()
time.sleep(3)

#Halaman Keranjang
driver.find_element(By.CLASS_NAME, "shopping_cart_link").click()
time.sleep(2)

#Hapus Satu Barang: Sauce Labs Bike Light dan melanjutkan belanja
driver.find_element(By.ID, "remove-sauce-labs-bike-light").click()
time.sleep(1)
driver.find_element(By.ID, "continue-shopping").click()
time.sleep(1)

#Klik Barang ketiga interaksi dengan fitur dropdown : Sauce Labs Onesie (Low to High)
dropdown = Select(driver.find_element(By.CLASS_NAME, "product_sort_container"))
dropdown.select_by_visible_text("Price (low to high)")
time.sleep(2)
driver.find_element(By.XPATH, "//div[text()='Sauce Labs Onesie']").click()
driver.find_element(By.ID, "add-to-cart").click()
driver.find_element(By.ID, "back-to-products").click()
time.sleep(3)

#Halaman Keranjang
driver.find_element(By.CLASS_NAME, "shopping_cart_link").click()
time.sleep(2)
driver.find_element(By.CSS_SELECTOR, "[data-test='checkout']").click()
time.sleep(1)

#Identity Information
driver.find_element(By.ID, "first-name").send_keys("Mees")
driver.find_element(By.ID, "last-name").send_keys("Hilgers")
driver.find_element(By.ID, "postal-code").send_keys("14045")
time.sleep(2)
driver.find_element(By.ID, "continue").click()
time.sleep(1)
driver.find_element(By.ID, "finish").click()
time.sleep(1)