import streamlit as sl
import pandas as pd

sl.set_page_config("Long's Portfolio","Portfolio", layout="wide")
sl.markdown(
    """
     <h1 style='text-align: center; color: #3498db; font-size: 40px; font-weight: bold; margin-bottom: 20px;'>Long's Portfolio</h1>
    """,
    unsafe_allow_html=True
)

col1, col2 = sl.columns([1,2])

with col1: 
    sl.image("images/Avatar.jpg", width=400)
with col2:
    # Styling the "About Me" section for better balance
    sl.markdown(
        """
        <div style='text-align: justify; font-size: 25px; line-height: 1.6;'>
            <h2 style='color: #2c3e50;'>Ngo Quoc Long</h2>
            <p>
                I am a motivated Java Developer with a strong foundation in Spring Boot, backend development, and full-stack web applications.
                I am passionate about building scalable, secure, and efficient solutions. With experience in developing and deploying web applications 
                using modern frameworks and cloud platforms, I bring strong analytical thinking, problem-solving skills, and a customer-focused mindset 
                to every project I work on.
            </p>
        </div>
        """,
        unsafe_allow_html=True
    )
    # sl.title("Ngo Quoc Long")
    # content = "I am a motivated Java Developer with a strong foundation in Spring Boot, backend development, and full-stack web applications. I am passionate about building scalable, secure, and efficient solutions. With experience in developing and deploying web applications using modern frameworks and cloud platforms, I bring strong analytical thinking, problem-solving skills, and a customer-focused mindset to every project I work on."
    # sl.write(content)
    
sl.markdown(
    """
     <h1 style='text-align: center; color: #3498db; font-size: 40px; font-weight: bold; margin-bottom: 20px;'>My Project</h1>
    """,
    unsafe_allow_html=True
)

col3,emp, col4 = sl.columns([1.5, 0.5, 1.5])
df = pd.read_csv("data.csv", sep=";")

# Styling Project Cards
project_card_template = """
<div style='border: 1px solid #ddd; border-radius: 10px; padding: 15px; margin-bottom: 20px; background-color: #f9f9f9;'>
    <h3 style='color: #2c3e50;'>{title}</h3>
    <p style='text-align: justify;'>{description}</p>
</div>
"""

with col3:
    for index, row in df[:5].iterrows():
        sl.markdown(
            project_card_template.format(
                title=row["title"],
                description=row["description"],
            ),
            unsafe_allow_html=True,
        )
        sl.image("images/" + row["image"], use_container_width =True)  # Display image separately
        sl.write(f"[Source Code]({row['url']})")

with col4:
    for index, row in df[5:].iterrows():
        sl.markdown(
            project_card_template.format(
                title=row["title"],
                description=row["description"],
            ),
            unsafe_allow_html=True,
        )
        sl.image("images/" + row["image"], use_container_width =True)  # Display image separately
        sl.write(f"[Source Code]({row['url']})")

