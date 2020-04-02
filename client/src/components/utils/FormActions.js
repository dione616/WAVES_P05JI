export const validate = (element, formdata = []) => {
  let error = [true, ""]

  if (element.validation.email) {
    const valid = /\S+@\S+\.=S+/.test(element.value)
    const message = `${!valid ? "Must be a valid email" : ""}`
    error = !valid ? [valid, message] : error
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== ""
    const message = `${!valid ? "This field is required" : ""}`
    //if not valid send [false,message] else default [true,""]
    error = !valid ? [valid, message] : error
  }
  return error
}
export const update = (element, formdata, formName) => {
  //create state copy
  const newFormdata = { ...formdata }
  const newElement = { ...newFormdata[element.id] }

  newElement.value = element.e.target.value

  if (element.blur) {
    let validData = validate(newElement, formdata)
    newElement.valid = validData[0]
    newElement.validationMessage = validData[1]
  }

  newElement.touched = element.blur

  //change state formdata.email.id=newElement
  newFormdata[element.id] = newElement

  return newFormdata
}