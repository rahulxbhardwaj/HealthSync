import React from 'react';
import Doctor from '../assets/doctor.jpg';
import '../styles/home.scss';
import Table from '../assets/table.jpg';
import Box_Data from '../assets/bar.jpg';
import Smoker from '../assets/smoker.jpg';
import Gender from '../assets/gender.jpg';

const Home = () => {
  return (
    <>
      <img src={Doctor} alt="Doctor" id="doctor" />
       <div class="overlay-text">Syncing Health for Seamless Care</div>
      <div>
        <br></br>
        
      <h1 id="ourfindings">We Collected Data and use serveral ML modeling and found the results given below</h1>
        
        <p id="h3table">We picked the Correlation Heatmap because it's an effective way to visualize the correlation between all pairs of features in a dataset. The heatmap uses colors to represent the magnitude of the correlation coefficient, making it easy to quickly identify highly correlated features.
</p>

        
        <img src={Table} alt="table" id="table" />
  <h3 id="h3table">Insights from the Correlation Heatmap reveal key relationships among the numerical features in the dataset:</h3>
         <h3 id="h3table">Age demonstrates a significant correlation with TenYearCHD, indicating a potential predictive relationship between these features and the risk of coronary heart disease.
                Diabetes and glucose show a substantial correlation of 61%.
                Age displays negative correlations with cigarettes per day, at 19%      
        </h3>



         <img src={Box_Data} alt="Doctor" id="table" />
    <h3 id="h3table">This chart is a boxplot that visualizes the age distribution of patients by sex and CHD (coronary heart disease) risk level

    There is a noticeable difference in the age distribution of patients who are at risk for CHD compared to those who are not at risk. Patients at risk for CHD tend to be older than those who are not at risk, regardless of sex.</h3>



        
        <div id="smokergender">
           <img src={Gender} alt="Doctor" id="genderr" />   
        <img src={Smoker} alt="Doctor" id="smoker" />
        </div>
    

        
        <h3 id="h3table"> This chart is a boxplot that visualizes the age distribution of patients by sex and CHD (coronary heart disease) risk level. It was likely chosen to gain insights into how age, sex, and CHD risk level may be related in this dataset.
        <br></br>What is/are the insight(s) found from the chart?
        There is a noticeable difference in the age distribution of patients who are at risk for CHD compared to those who are not at risk. Patients at risk for CHD tend to be older than those who are not at risk, regardless of sex. </h3>
        <h3 id="h3table">This chart is a countplot that visualizes the frequency of CHD (coronary heart disease) cases among smokers and non-smokers. It was likely chosen to gain insights into how smoking may be related to the risk of CHD in this dataset. <br></br>
        What is/are the insight(s) found from the chart?
        The chart shows that patients who smoke appear to be at higher risk for CHD than those who do not smoke in this dataset. Specifically, a higher proportion of patients who smoke are at risk for CHD compared to those who do not smoke. These findings suggest that smoking may be a factor in determining the risk of CHD in this dataset.</h3>
     

      </div>
    </>
  );
};

export default Home;