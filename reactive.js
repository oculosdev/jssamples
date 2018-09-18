
const { Observable, Subject, ReplaySubject, from, fromEvent, of, range } = rxjs;
const { map, filter, switchMap } = rxjs.operators;

var loadEvent = fromEvent(window, "load");

const stuff = of("1", "2");

from(stuff).subscribe(stuffEvent => {
    console.log(stuffEvent);
});

function reactiveClickHandler(clickEvent) {
    stuff.next("more stuff");
}

loadEvent.subscribe(loadEvent => {
    
    console.log(loadEvent);

    fromEvent(document.getElementById("reactiveClick"), "click")
        .subscribe(reactiveClickHandler);
});
