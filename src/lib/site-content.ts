export type Service = {
  slug: string
  name: string
  short: string
  intro: string
  signs: string[]
  work: string[]
  faq: { q: string; a: string }[]
}

export const brand = "Abilene Sprinkler Repair"
export const domain = "abilenesprinklerrepair.com"
export const phoneDisplay = "(855) 695-1000"
export const phoneHref = "tel:+18556951000"
export const requestServiceUrl = "https://mrsprinklerrepair.com/request-service/"

export const services: Service[] = [
  {
    slug: "sprinkler-repair",
    name: "Sprinkler System Repair",
    short: "Complete diagnostics and practical repairs for residential irrigation systems.",
    intro: "A sprinkler problem is rarely limited to the first symptom you notice. We inspect the active zone, water pressure, valves, wiring, nozzles, and controller settings so the repair addresses the cause—not just the wet spot or brown patch.",
    signs: ["Dry or uneven areas", "Zones that will not start or stop", "Sputtering and low pressure", "Water pooling near a head or valve box"],
    work: ["Zone-by-zone system inspection", "Pressure and coverage evaluation", "Repair recommendations in priority order", "Final operation and runoff check"],
    faq: [{ q: "Can an older system be repaired?", a: "Usually, yes. Many older systems can be restored by replacing failed valves, heads, wiring, or controller components without rebuilding the entire yard." }, { q: "Will you check every zone?", a: "A complete diagnostic should include every accessible zone so related issues are not missed." }],
  },
  {
    slug: "sprinkler-head-repair",
    name: "Sprinkler Head Repair",
    short: "Repair broken, buried, leaning, clogged, or poorly aimed spray heads and rotors.",
    intro: "Mowers, soil movement, roots, and normal wear can damage sprinkler heads. Correct head height, nozzle pattern, and matched precipitation matter as much as replacing the broken part.",
    signs: ["A small geyser in the lawn", "Water spraying pavement or fences", "A head that does not rise", "Misting instead of a clean spray pattern"],
    work: ["Locate buried and damaged heads", "Match spray pattern and flow", "Level heads with finished grade", "Adjust arcs to keep water on the landscape"],
    faq: [{ q: "Why does a new head still spray poorly?", a: "Low pressure, a clogged nozzle, a lateral-line leak, or an incompatible nozzle can all affect a new head." }, { q: "Can you move a sprinkler head?", a: "Yes. Heads can often be relocated when patios, planting beds, or landscape changes alter the original coverage." }],
  },
  {
    slug: "sprinkler-valve-repair",
    name: "Sprinkler Valve Repair",
    short: "Diagnose valves that leak, chatter, stay open, or fail to activate a zone.",
    intro: "Valves control the flow to each irrigation zone. A worn diaphragm, failed solenoid, damaged wire, or debris inside the valve can create similar symptoms, so diagnosis comes before replacement.",
    signs: ["A zone runs continuously", "One zone never starts", "Water seeps from the lowest head", "The valve box stays wet"],
    work: ["Electrical and manual valve testing", "Solenoid and diaphragm service", "Valve-box cleanup and identification", "Leak and shutoff verification"],
    faq: [{ q: "Why does a zone keep running?", a: "Debris or a damaged diaphragm may prevent the valve from closing. Controller and wiring faults can also keep a valve energized." }, { q: "Do all valves need replacement together?", a: "No. Each valve can be tested and repaired or replaced based on its condition." }],
  },
  {
    slug: "sprinkler-leak-repair",
    name: "Sprinkler Leak Repair",
    short: "Find and repair broken lateral lines, fittings, risers, and persistent underground leaks.",
    intro: "Unexplained wet soil, erosion, and weak pressure can indicate a hidden irrigation leak. A focused inspection helps narrow the location and reduce unnecessary digging.",
    signs: ["Wet ground when the system is off", "Sudden pressure loss", "Erosion around a head", "An unexplained increase in water use"],
    work: ["Isolate the affected zone", "Trace likely break locations", "Excavate carefully and repair pipe", "Flush and pressure-test the repaired line"],
    faq: [{ q: "Can tree roots break sprinkler lines?", a: "Roots can displace fittings and place stress on shallow irrigation pipe, especially as trees mature." }, { q: "Is every wet spot a pipe leak?", a: "No. A low-head drain, stuck valve, broken riser, or poor drainage can look similar, which is why diagnosis matters." }],
  },
  {
    slug: "sprinkler-controller-repair",
    name: "Controller & Timer Repair",
    short: "Repair programming, wiring, transformer, sensor, and station problems.",
    intro: "The controller is the command center of the irrigation system. We check schedules, station output, field wiring, rain-sensor settings, and seasonal programming before recommending replacement.",
    signs: ["Blank or flashing display", "Stations skip or run twice", "System runs after rain", "Controller reports a fault"],
    work: ["Schedule and program review", "Station-output testing", "Wire and sensor diagnosis", "Smart-controller setup and homeowner walkthrough"],
    faq: [{ q: "Should I upgrade to a smart controller?", a: "A smart controller can be useful when it is set for Abilene heat, Bermuda turf, sun exposure, and the soil in that yard. It is not a substitute for repairing leaks or poor coverage." }, { q: "Can you program my existing timer?", a: "Yes. Many water-waste problems can be improved through correct start times, run times, and watering-day settings that follow the City of Abilene’s current outdoor watering rules." }],
  },
  {
    slug: "sprinkler-system-tune-up",
    name: "Sprinkler System Tune-Up",
    short: "Seasonal inspection, adjustment, cleanup, and efficiency improvements.",
    intro: "A tune-up catches small failures before Abilene’s hottest weeks put extra stress on Bermuda lawns and the water bill. Every zone is observed for coverage, runoff, overspray, and visible wear.",
    signs: ["System has not been checked recently", "Landscape has changed", "Water runs down the street", "Some areas are wetter than others"],
    work: ["Operate and observe every zone", "Clean and align nozzles", "Review controller schedule", "Document repairs worth prioritizing"],
    faq: [{ q: "When should I schedule a tune-up?", a: "Late spring is ideal, before the longest stretches of 100-degree weather. A tune-up is also useful whenever coverage or scheduling seems inconsistent." }, { q: "Does a tune-up include major repairs?", a: "Minor adjustments are part of the inspection. Larger repairs should be explained and approved before work begins." }],
  },
]

export const areas = [
  { slug: "abilene", name: "Abilene", detail: "Abilene lawns sit on caliche and clay, take hard West Texas sun and wind, and are watered under city rules that change with drought. Sprinkler repair here covers broken heads, leaks, valves, and controllers across ZIP codes 79601, 79602, 79603, 79605, and 79606, including the Dyess area." },
  { slug: "buffalo-gap", name: "Buffalo Gap", detail: "Buffalo Gap properties, served through ZIP code 79508, often mix larger lots, mesquite, and Bermuda. Longer pipe runs and grade changes make zone-by-zone pressure and leak checks worth doing before a head is replaced." },
  { slug: "tye", name: "Tye", detail: "Tye sits just west of Abilene in ZIP code 79563. Wind, thin topsoil, and older valve wiring show up as dry strips and zones that will not start. A repair visit runs the system before recommending parts." },
  { slug: "merkel", name: "Merkel", detail: "Merkel, in ZIP code 79536, is west of Abilene along the highway. Residential systems there deal with the same semi-arid heat, caliche, and long laterals. We diagnose the full zone, then repair the heads, valves, or pipe that are actually failing." },
  { slug: "clyde", name: "Clyde", detail: "Clyde is east of Abilene in Callahan County, ZIP code 79510. Irrigation there still has to survive 100-degree weeks and wind. Service covers head repair, valve diagnosis, leak repair, controller setup, and seasonal checks." },
  { slug: "hawley", name: "Hawley", detail: "Hawley is north of Abilene in Jones County, ZIP code 79525. Rural and edge-of-town lots can have long wire runs and heads buried by soil movement. We test station output and coverage instead of guessing from the brown patch." },
  { slug: "potosi", name: "Potosi", detail: "Potosi is on the north side of Abilene, and local mail uses Abilene ZIP codes. Lawns there see the same heat, wind, and hard soil as the rest of the city. Repair work focuses on coverage, stuck valves, and leaks that waste water under local watering limits." },
  { slug: "impact", name: "Impact", detail: "Impact is a small town surrounded by Abilene, with local mail through ZIP code 79603. Sprinkler problems look like the neighboring Abilene blocks: dry Bermuda edges, tilted heads, and controllers still running a schedule that no longer matches the yard." },
]

export type PostSection = { heading: string; note: string }

export type Post = {
  slug: string
  title: string
  category: string
  excerpt: string
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: "sprinkler-system-not-working",
    title: "Why Is My Sprinkler System Not Working?",
    category: "Troubleshooting",
    excerpt: "A practical look at controllers, valves, wiring, pressure, and heads when an Abilene system will not run correctly.",
    sections: [
      { heading: "Start at the controller", note: "Check that the controller has power, the time is set, and the rain sensor is not paused. A blank display, a tripped breaker, or a sensor left in the off position will stop every zone even when the valves and heads are fine." },
      { heading: "Check whether one zone or every zone is affected", note: "One dead zone usually points to that station’s valve, wire, or pipe. If nothing in the yard runs, look at the water supply, the controller, the common wire, or a master valve before replacing heads." },
      { heading: "Look for valve and wiring clues", note: "A humming solenoid, a constantly wet valve box, or a zone that only runs when you open the bleed screw is a valve or wire problem. Abilene’s heat is hard on valve boxes that sit in full sun, and nicked wire is common where beds have been reworked." },
      { heading: "Inspect pressure and visible leaks", note: "Turn on the weak zone and watch for a geyser, a soggy seam, or heads that barely rise. On caliche, a broken fitting can lose pressure without leaving a huge puddle on the surface. Note which zone it is before you shut the system back off." },
    ],
  },
  {
    slug: "fix-dry-spots-abilene-lawn",
    title: "How to Fix Dry Spots in an Abilene Lawn",
    category: "Lawn Watering",
    excerpt: "Dry Bermuda in Abilene is often a coverage problem, not a reason to run the clock longer.",
    sections: [
      { heading: "Watch the entire zone operate", note: "Run the dry zone in the morning and walk it. Look for heads that do not pop up, arcs that stop short of the brown edge, and water blowing off the lawn. Wind in Abilene moves spray patterns more than a longer runtime will." },
      { heading: "Compare nozzle patterns and head spacing", note: "A rotor next to a spray head, or a nozzle pointed into a fence, leaves a dry strip no schedule can fix. Match the nozzle to the area and set the arc so water stays on the turf." },
      { heading: "Account for caliche, clay, and runoff", note: "Water that puddles and then runs to the street is not soaking the dry spot. Hard caliche and clay need cycle-and-soak, with a pause between short runtimes, after the heads are actually covering the brown area." },
      { heading: "Repair coverage before adding run time", note: "Follow the City of Abilene’s current outdoor watering days and hours. Extra minutes on a broken head waste the days you are allowed to water. Fix the coverage, then set the controller to the restriction schedule." },
    ],
  },
  {
    slug: "sprinkler-leak-signs",
    title: "7 Signs You May Have a Sprinkler Leak",
    category: "Leak Detection",
    excerpt: "Wet spots, pressure loss, and a moving meter are the clues that deserve a closer look in dry West Texas soil.",
    sections: [
      { heading: "A zone suddenly loses pressure", note: "Heads that used to throw across the yard and now dribble can mean a split lateral on that station. Compare it with a neighboring zone. If only one zone is weak, the supply to the house is less likely to be the cause." },
      { heading: "Soil stays soft between watering days", note: "Abilene soil dries fast. A patch that stays spongy on a day the system is off is a reason to isolate that zone. It may be a stuck valve, a low-head drain, or a fitting that never closed." },
      { heading: "Water bubbles near a head", note: "Bubbling at the base of a head is often a broken riser or a fitting pulled apart by soil movement. That is different from a nozzle that is simply clogged. Do not keep that zone running while the hole grows." },
      { heading: "The meter moves while fixtures are off", note: "If every faucet is off and the irrigation controller is idle, a moving water meter means water is still leaving the system. Shut the irrigation shutoff if you can, and call (855) 695-1000 if the leak is active." },
    ],
  },
  {
    slug: "west-texas-summer-watering",
    title: "A Practical West Texas Summer Watering Schedule",
    category: "Seasonal Guide",
    excerpt: "Build an Abilene schedule around Bermuda, shade, hard soil, and the city’s current watering rules.",
    sections: [
      { heading: "Water deeply without creating runoff", note: "Bermuda can handle heat when the roots actually get water. Short bursts that run into the gutter only wet the thatch. Watch the first zone and stop the runtime when water starts to leave the lawn." },
      { heading: "Use cycle-and-soak on caliche and clay", note: "Split the runtime into two or three cycles with a soak between them. That pause lets water move into hard ground instead of sheeting off. Sunny parkways and shaded north sides should not share one number." },
      { heading: "Water early when the city allows it", note: "Early morning watering loses less water to wind and evaporation. Use the hours and days the City of Abilene is allowing right now. Those rules change, so the controller should be updated when the city updates them." },
      { heading: "Adjust each zone for its actual exposure", note: "A full-sun front yard, a mesquite-shaded side yard, and a drip bed are three schedules. After heads and valves are working, set each station for the plants and the sun it actually has." },
    ],
  },
]
