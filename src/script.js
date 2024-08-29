const userInput = document.getElementById("user-code");
const completeButton = document.getElementById("complete-btn");
const generatedTextArea = document.getElementById("generated-text");
const apiKey = "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"

const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/bigcode/starcoder2-3b",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
  completeButton.setAttribute("disabled", true);

  query({ inputs: `${userInput.value}` })
    .then((response) => {
      console.log(response);
      console.log(response[0]);
      generatedTextArea.innerHTML = response[0].generated_text;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      completeButton.removeAttribute("disabled");
    });
});
