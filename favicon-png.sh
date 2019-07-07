DESKTOP=(16 32 96 128 144 192 228)
IOS=(120 152 180)
ANDROID=196

ICON_DIR=/home/hcrocker/Development/WebStormProjects/harrycrocker.com/assets/favicon/
SVG=$ICON_DIR\favicon.svg

for i in "${DESKTOP[@]}"; do
    inkscape ${SVG}\
        --export-png ${ICON_DIR}favicon-${i}.png\
        --export-height ${i}\
        --export-width ${i}\
        --without-gui
done

for i in "${IOS[@]}"; do
    inkscape ${SVG}\
        --export-png ${ICON_DIR}apple-touch-icon-${i}.png\
        --export-height ${i}\
        --export-width ${i}\
        --without-gui
done

inkscape ${SVG}\
        --export-png ${ICON_DIR}android-home-icon-${ANDROID}.png\
        --export-height ${ANDROID}\
        --export-width ${ANDROID}\
        --without-gui