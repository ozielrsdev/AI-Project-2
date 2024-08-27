const userInput = document.getElementById("user-code");
const completeButton = document.getElementById("complete-btn");

const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/bigcode/starcoder2-3b",
    {
      headers: {
        Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};


completeButton.addEventListener("click", () => {
  query({ inputs: "Can you please let us know more details about your " }).then(
    (response) => {
      console.log(JSON.stringify(response));
    }
  );
});
