const inputElement = document.getElementById("model-input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  const file = fileList[0];
  console.log("The file name is " + file.name);
}