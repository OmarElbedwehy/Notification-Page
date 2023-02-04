let notifi_s = document.querySelectorAll(".notifi");

let notifi_s_unread_arr = [];

notifi_s.forEach((ele)=>{
    if (ele.classList.contains("unread")){
        notifi_s_unread_arr.push(ele)
    }
});

document.querySelector("#unread_length").textContent = notifi_s_unread_arr.length

let marked_all_as_read = document.querySelector("#mark");

marked_all_as_read.addEventListener("click", ()=>{
    notifi_s_unread_arr.forEach((ele)=>{
        ele.style.backgroundColor = "hsl(0, 0%, 100%)";
        ele.querySelector(".unread_point").remove()
    })
})