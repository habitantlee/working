from selenium import webdriver
import time
import unittest
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(executable_path="/usr/local/bin/chromedriver")


#test
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("https://www.naver.com")

        self.assertIn("씽씽, 편리한 경험을 제공합니다", driver.title)
        driver.find_element(By.ID, 'loginId').send_keys("test")
        driver.find_element(By.ID, 'loginPassword').send_keys("test")
        driver.find_element(By.ID,'loginBtn').send_keys(Keys.RETURN)
        time.sleep(3)
        self.assertIn("씽씽 - 근거리 대중교통 | PUMP", driver.title)
        print(driver.title)

        assert "No results found." not in driver.page_source

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    print('test0')
    unittest.main()
    unittest.TestCase()
