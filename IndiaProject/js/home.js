function searchState(stateName) {
    console.log("Searching for:", stateName);
    if (stateName.toLowerCase() === "andaman and nicobar") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-AN.html' , '_blank');
    }else if (stateName.toLowerCase() === "andhra pradesh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-AP.html' , '_blank');
    }else if (stateName.toLowerCase() === "arunachal pradesh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-AR.html' , '_blank');
    }else if (stateName.toLowerCase() === "assam") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-AS.html' , '_blank');
    }else if (stateName.toLowerCase() === "bihar") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-BR.html' , '_blank');
    }else if (stateName.toLowerCase() === "chandigarh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-CH.html' , '_blank');
    }else if (stateName.toLowerCase() === "chattisgarh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-CT.html' , '_blank');
    }else if (stateName.toLowerCase() === "daman and diu") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-DD.html' , '_blank');
    }else if (stateName.toLowerCase() === "delhi") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-DL.html' , '_blank');
    }else if (stateName.toLowerCase() === "dadar and nagar haveli") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-DN.html' , '_blank');
    }else if (stateName.toLowerCase() === "goa") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-GA.html' , '_blank');
    }else if (stateName.toLowerCase() === "gujarat") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-GJ.html' , '_blank');
    }else if (stateName.toLowerCase() === "himachal pradesh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-HP.html' , '_blank');
    }else if (stateName.toLowerCase() === "haryana") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-HR.html' , '_blank');
    }else if (stateName.toLowerCase() === "jharkhand") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-JH.html' , '_blank');
    }else if (stateName.toLowerCase() === "jammu and kashmir") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-JK.html' , '_blank');
    }else if (stateName.toLowerCase() === "karnataka") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-KA.html' , '_blank');
    }else if (stateName.toLowerCase() === "kerela") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-KL.html' , '_blank');
    }else if (stateName.toLowerCase() === "lakshadweep") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-LD.html' , '_blank');
    }else if (stateName.toLowerCase() === "maharashtra") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-MH.html' , '_blank');
    }else if (stateName.toLowerCase() === "meghalaya") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-ML.html' , '_blank');
    }else if (stateName.toLowerCase() === "manipur") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-MN.html' , '_blank');
    }else if (stateName.toLowerCase() === "madhya pradesh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-MP.html' , '_blank');
    }else if (stateName.toLowerCase() === "mizoram") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-MZ.html' , '_blank');
    }else if (stateName.toLowerCase() === "nagaland") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-NL.html' , '_blank');
    }else if (stateName.toLowerCase() === "odisha") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-OR.html' , '_blank');
    }else if (stateName.toLowerCase() === "punjab") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-PB.html' , '_blank');
    }else if (stateName.toLowerCase() === "pudducherry" || stateName.toLowerCase() === "pondicherry") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-PY.html' , '_blank');
    }else if (stateName.toLowerCase() === "rajasthan") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-RJ.html' , '_blank');
    }else if (stateName.toLowerCase() === "sikkim") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-SK.html' , '_blank');
    }else if (stateName.toLowerCase() === "telangana") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-TG.html' , '_blank');
    }else if (stateName.toLowerCase() === "tamil nadu") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-TN.html' , '_blank');
    }else if (stateName.toLowerCase() === "tripura") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-TR.html' , '_blank');
    }else if (stateName.toLowerCase() === "uttar pradesh") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-UP.html' , '_blank');
    }else if (stateName.toLowerCase() === "uttrakhand") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-UT.html' , '_blank');
    }else if (stateName.toLowerCase() === "west bengal") {
        console.log("redirecting");
        window.open('../IndiaProject/html/IN-WB.html' , '_blank');
    }else {
    alert('State not found');
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const stateName = document.getElementById("searchinput").value;
    searchState(stateName);
    document.getElementById("searchinput").value = "";
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("searchForm").addEventListener("submit", handleSubmit);
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to redirect based on selected state
    function redirectToStatePage() {
        const stateSelect = document.getElementById("state-select");
        const stateName = stateSelect.value.toLowerCase();

        if (stateName) {
            console.log("Redirecting to:", stateName);
            const stateMap = {
                "andaman and nicobar islands": '../IndiaProject/html/IN-AN.html',
                "andhra pradesh": '../IndiaProject/html/IN-AP.html',
                "arunachal pradesh": '../IndiaProject/html/IN-AR.html',
                "assam": '../IndiaProject/html/IN-AS.html',
                "bihar": '../IndiaProject/html/IN-BR.html',
                "chandigarh": '../IndiaProject/html/IN-CH.html',
                "chhattisgarh": '../IndiaProject/html/IN-CT.html',
                "dadra and nagar haveli": '../IndiaProject/html/IN-DN.html',
                "daman and diu": '../IndiaProject/html/IN-DD.html',
                "delhi": '../IndiaProject/html/IN-DL.html',
                "goa": '../IndiaProject/html/IN-GA.html',
                "gujarat": '../IndiaProject/html/IN-GJ.html',
                "haryana": '../IndiaProject/html/IN-HR.html',
                "himachal pradesh": '../IndiaProject/html/IN-HP.html',
                "jammu and kashmir": '../IndiaProject/html/IN-JK.html',
                "jharkhand": '../IndiaProject/html/IN-JH.html',
                "karnataka": '../IndiaProject/html/IN-KA.html',
                "kerala": '../IndiaProject/html/IN-KL.html',
                "lakshadweep": '../IndiaProject/html/IN-LD.html',
                "madhya pradesh": '../IndiaProject/html/IN-MP.html',
                "maharashtra": '../IndiaProject/html/IN-MH.html',
                "manipur": '../IndiaProject/html/IN-MN.html',
                "meghalaya": '../IndiaProject/html/IN-ML.html',
                "mizoram": '../IndiaProject/html/IN-MZ.html',
                "nagaland": '../IndiaProject/html/IN-NL.html',
                "odisha": '../IndiaProject/html/IN-OR.html',
                "puducherry": '../IndiaProject/html/IN-PY.html',
                "punjab": '../IndiaProject/html/IN-PB.html',
                "rajasthan": '../IndiaProject/html/IN-RJ.html',
                "sikkim": '../IndiaProject/html/IN-SK.html',
                "tamil nadu": '../IndiaProject/html/IN-TN.html',
                "telangana": '../IndiaProject/html/IN-TG.html',
                "tripura": '../IndiaProject/html/IN-TR.html',
                "uttar pradesh": '../IndiaProject/html/IN-UP.html',
                "uttarakhand": '../IndiaProject/html/IN-UT.html',
                "west bengal": '../IndiaProject/html/IN-WB.html'
            };

            const url = stateMap[stateName];
            if (url) {
                window.open(url, '_blank'); // Open in a new tab
            } else {
                alert('State not found');
            }
        }
    }

    // Add event listener for dropdown change
    document.getElementById("state-select").addEventListener("change", redirectToStatePage);
});
