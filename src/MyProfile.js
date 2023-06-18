import { useEffect, useState } from "react";
import "pannellum/build/pannellum.css";
import "pannellum";
import "./App.css";

declare var pannellum: any;

const PANORAMAS = [
  "../../images/comp/ne-beg-1.jpg",
  "../../images/comp/ne-gm-1.jpg",
  "../../images/comp/ne-gm-2.jpg",
  "../../images/comp/ne-gm-3.jpg",
  "../../images/comp/ne-gm-4.jpg",
  "../../images/comp/ne-gm-5.jpg",
];

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [activePanorama, setActivePanorama] = useState(0);
  const handleChangePanorama = (idx: number) => {
    console.log(idx);
    setActivePanorama(idx);
  };

  const handleToggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  const hotSpots = [
    {
      pitch: 10,
      yaw: 40,
      cssClass: "custom-hotspot",
      createTooltipArgs: "Hotspot 1",
      createTooltipFunc: () => <div>Hotspot 1</div>,
      panorama: 0,
      clickHandlerFunc: () => handleChangePanorama(1)
    },
    {
      pitch: 30,
      yaw: 40,
      cssClass: "custom-hotspot",
      createTooltipArgs: "Hotspot 2",
      panorama: 1,
      clickHandlerFunc: () => handleChangePanorama(2)
    },
    {
      pitch: 20,
      yaw: 40,
      cssClass: "custom-hotspot",
      createTooltipArgs: "Hotspot 3",
      panorama: 2,
      clickHandlerFunc: () => handleChangePanorama(0)
    }
  ];

  const filteredHotSpots = hotSpots.filter(
    (hotSpot) => hotSpot.panorama === activePanorama
  );

  useEffect(() => {
    const panViewer = pannellum.viewer("mypanorama", {
      type: "equirectangular",
      autoLoad: true,
      panorama: PANORAMAS[activePanorama],
      hotSpots: filteredHotSpots
    });

    return () => {
      panViewer.destroy();
    };
  }, [activePanorama, filteredHotSpots]);

  return (
    <div className="container">
      <div className={`drawer ${showDrawer ? "show" : ""}`}>
        <button
          type="button"
          className="drawer-close-btn"
          onClick={handleToggleDrawer}
        >
          &times;
        </button>
        This is description of the product
      </div>
      <div id="mypanorama"></div>
    </div>
  );
}