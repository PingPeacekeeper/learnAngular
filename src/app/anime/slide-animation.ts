import {
    animate,
    animateChild,
    animation, group,
    keyframes,
    query, stagger, state,
    style,
    transition,
    trigger,
    useAnimation
} from "@angular/animations";


export const enterAnimation = animation([
    style({
        opacity: 0,
        transform: "translateY(40px)"
    }),
    animate(250, style({ opacity: 1, transform: "translateY(0)" }))
])
export const leaveAnimation = animation(
    [animate("{{duration}} {{delay}} {{easing}}", keyframes([
        style({ offset: 0.3, transform: "translateY(-10px)" }),
        style({ offset: 1, transform: "translateY(50px)" })
    ]))],
    {
        params: {
            duration: "400ms",
            delay: "0s",
            easing: "ease-out"
        }
    }
)
export const slideAnimation = trigger("slide", [
    transition("void=>*", useAnimation(enterAnimation)),
    transition("*=>void", useAnimation(leaveAnimation,
        { params: { delay: "1s" } }))
])

export const beginAnimation = trigger("begin", [
    transition(":enter", [
        group([
            query("h2", [
                style({ transform: "translateY(10px)", opacity: 0 }),
                animate(300)
            ]),
            query("@slide", stagger(200, animateChild()))]
        )
    ])]
)
export const expendCollapse = trigger("expandCollapse", [
    state("collapsed", style({
        height: 0,
        overflow: "hidden",
        paddingTop: 0,
        paddingBottom: 0
    })),
    state("expanded", style({ height: "*", overflow: "auto" })),
    transition("collapsed=>expanded", animate("400ms ease-out")),
    transition("expanded=>collapsed", animate("400ms ease-in"))
])