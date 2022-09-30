var item = document.querySelectorAll(".select-file");
var allItem = document.getElementById("select-all");
var files = document.getElementById('files')
var del = document.getElementById('delete-button');
files.addEventListener('click', (e) => {
    console.log(allItem);
    if (e.target.id != 'select-all') {
        var selectedFiles = 0;
        item.forEach((note) => {
            if (note.checked && note.parentElement.style.backgroundColor != '#dae5ff') {
                note.parentElement.style.backgroundColor = '#dae5ff';
                selectedFiles++;
            }
            else if (!note.checked) {
                note.parentElement.style.backgroundColor = 'white';
                // console.log(item);
                // selectFiles--;
            }
        });
        console.log(selectedFiles)
        console.log(item.length)
        if (selectedFiles === item.length) {

            var selectAllItem = document.getElementById("select-all");
            selectAllItem.checked = true;
        } else {
            var selectAllItem = document.getElementById("select-all");
            selectAllItem.checked = false;
        }
    } else {
        if (allItem.checked) {
            item.forEach((note) => {
                note.parentElement.style.backgroundColor = '#dae5ff';
                note.checked = true;
            })
        } else if (e.target.closest('input').id == 'select-all') {
            item.forEach((note) => {
                note.parentElement.style.backgroundColor = 'white';
                note.checked = false;
            })
        }
    }
    // if(e.target.id == 'delete-button'){
    //     console.log(e.target.id);

    //     var selectedFiles = 0;
    //     item.forEach((note) => {
    //         if (note.checked){
    //             console.log(note.parentElement.parentElement.parentElement);
    //             note.parentElement.parentElement.parentElement.removeChild(note.parentElement.parentElement);
    //         }
    //     })
    // }
})
del.addEventListener("click", deleteFile);
function deleteFile() {
    // const shred = document.querySelector('.full-shredder').style.display = "block";

    var item = document.querySelectorAll(".select-file");
    item.forEach((note) => {
        if (note.checked){
            // console.log(note.parentElement.parentElement.parentElement);
            const shred = document.querySelector('.full-shredder');
            shred.style.display = "block";
            
            // document.querySelector('.shred-me').addEventListener('click', function(e) {
            //     note.parentElement.parentElement.parentElement.removeChild(note.parentElement.parentElement);
            //     const myTimeout = setTimeout(deletion, 5000);

            //     function deletion() {
            //         const shred = document.querySelector('.full-shredder');
            //         shred.style.display = "none";
            //     } 
            // });
        }
    })
  }

  del.addEventListener('click', function(e) {
    console.log('he');
    // e.preventDefault();
    const mainEl = '.shredded-paper';
    const repeatUnit = '.shredded-paper .content';
    const repeatNum = 10;
    
    for(let i = 0; i < repeatNum; ++i) {
        let newEl = document.createElement('div');
        newEl.innerHTML = document.querySelector(repeatUnit).innerHTML;
        newEl.classList.add(`item-${i+1}`);
        newEl.setAttribute('style', `clip-path: inset(0px ${(repeatNum-1-i)*40}px 0 ${i*40}px);`);
        document.querySelector(mainEl).appendChild(newEl);
    }
    document.addEventListener('keydown', function (e) {
        
        console.log(e.key);
        if (e.key === 'Enter') {
            document.querySelector('.shredded-paper').classList.add('animate');
            const myTimeout = setTimeout(deletion, 4000);

            function deletion() {
                var item = document.querySelectorAll(".select-file");
                item.forEach((note) => {
                    if (note.checked){
                note.parentElement.parentElement.parentElement.removeChild(note.parentElement.parentElement);
                    }
                    })
                const shred = document.querySelector('.full-shredder');
                shred.style.display = "none";
            } 
        }
    });
    // document.querySelector('.shred-me').addEventListener('click', function(e) {
    //     document.querySelector('.shredded-paper').classList.add('animate');
        
    // });
    
});
