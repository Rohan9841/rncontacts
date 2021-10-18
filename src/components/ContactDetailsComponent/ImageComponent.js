import { Image, Text, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";

const ImageComponent = ({ src }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const onLoadStart = () => {
        setIsLoading(true);
    };

    const onLoadEnd = () => {
        setIsLoading(false);
    }

    const onError = () => {
        setIsLoading(false);
        setHasError(true);
    }
    return (
        <>
            <View style={styles.imageContainer}>
                {isLoading && (<Text style={styles.loading}>Loading Image</Text>)}
                <View>
                    <Image
                        style={styles.detailPhoto}
                        source={{ uri: src }}
                        onLoadStart={onLoadStart}
                        onLoadEnd={onLoadEnd}
                        onError={onError}
                    />
                </View>
            </View>
        </>
    );
}

export default ImageComponent;